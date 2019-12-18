import { GreyBalls } from './animationObjects/greyBalls.js'
import { HeadContainer } from './animationObjects/headContainer.js'
import { CameraObject } from './animationDisplayElements/cameraObject.js'
import { RenderObject } from './animationDisplayElements/renderer.js'
import { ShiningStarEffect } from './animationObjects/shiningStar.js'

// ---------------------------------------------- SCREEN SETUP ----------------------------------------------
// Instantiate objects
let cameraObj = new CameraObject()
let rendererObj = new RenderObject()
const scene = new THREE.Scene()

let container = document.getElementById('animation')
container.appendChild(rendererObj.domElement())

// resize canvas on resize window
window.addEventListener('resize', () => {
  rendererObj.resize()
  cameraObj.resize()
})

// Enable interaction with animation via mouse and key events
var controls = new THREE.OrbitControls(cameraObj.camera(), document.querySelector('body'))
controls.addEventListener('change', () => {
  pointLight.position.copy(cameraObj.position().position)
})

// ---------------------------------------------- ANIMATION OBJECTS ---------------------------------------------

// Generate objects to be displayed on screen
let generateSpheres = function () {
  let greyBalls = new GreyBalls()
  greyBalls.greyBalls().forEach((neuron) => {
    scene.add(neuron)
  })
}
generateSpheres()

let meshContainer = new HeadContainer().meshContainer()
scene.add(meshContainer)

var loader = new THREE.GLTF2Loader()

loader.load('js/faceAnimation/3DFace.glb', gltf => {
  var headModel = gltf.scene
  headModel.position.set(3.6, -1, 3)
  headModel.scale.set(1.2, 1.2, 1.2)
  scene.add(headModel)
})

let shiningStarEffect = new ShiningStarEffect(scene)

// ---------------------------------------------- LIGHTING ----------------------------------------------
// ambient light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

// point light
var pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(25, 50, 25)
scene.add(pointLight)

// ---------------------------------------------- ANIMATION LOOP ----------------------------------------------

// Run animation
function animate () {
  requestAnimationFrame(animate)
  shiningStarEffect.animate()
  cameraObj.animate(scene.position)
  pointLight.position.set(cameraObj.position().x, cameraObj.position().y + 10, cameraObj.position().z + 5)
  rendererObj.render(scene, cameraObj.camera())
}

animate()

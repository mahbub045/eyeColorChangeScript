/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Meta Spark Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Meta Spark Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

;(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');
  const face = FaceTracking.face(0);
const leftEyeMaterial = FaceTracking.face(0).cameraTransform.applyTo(face.leftEye.anchor("leftEye")).child("eyeMaterial");
const rightEyeMaterial = FaceTracking.face(0).cameraTransform.applyTo(face.rightEye.anchor("rightEye")).child("eyeMaterial");

// Change eye color (replace with your logic)
leftEyeMaterial.diffuse = SphericalHarmonicsColor.transition(0, 1, [1, 0, 0], [0, 0, 1]);
rightEyeMaterial.diffuse = SphericalHarmonicsColor.transition(0, 1, [1, 0, 0], [0, 0, 1]);


})(); // Enables async/await in JS [part 2]

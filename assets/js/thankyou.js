var plantilla = `
<animateMotion dur="10s" repeatCount="indefinite" keyPoints="0;0.4;1" keyTimes="0;0.5;1" calcMode="linear">
  <mpath xlink:href="#theMotionPath"/>
</animateMotion>
`;

window.onload = function() {
    var circle = document.getElementsByTagName("circle")[2];
    circle.innerHTML = plantilla;
}
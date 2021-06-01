AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const model = document.createElement('a-entity')

    setTimeout(() => {

      model.setAttribute('position', '0 5000 1000')
      model.setAttribute('rotation', '0 90 0')
      model.setAttribute('visible', 'false')
      model.setAttribute('scale', '0.0001 0.0001 0.0001')

      model.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV)

      model.addEventListener('model-loaded', () => {
        model.setAttribute('visible', 'true')
        model.setAttribute('animation', {
          property: 'scale',
          to: '100 100 100',
          easing: 'easeOutElastic',
          dur: 800,
        })
      })
      text.setAttribute('visible', 'false')
    }, 15000)
  }
})
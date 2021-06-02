AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const mod = document.createElement('a-entity')

    setTimeout(() => {

      mod.setAttribute('position', '0 500 -1000')
      mod.setAttribute('rotation', '0 90 0')
      mod.setAttribute('visible', 'false')
      mod.setAttribute('scale', '100 100 100')
      mod.setAttribute('animation-mixer', {
        clip: 'Loop-400',
        loop: 'repeat',
        crossFadeDuration: '0.4'
      })

      mod.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(mod)

      mod.addEventListener('model-loaded', () => {
        mod.setAttribute('visible', 'true')
        // mod.setAttribute('animation', {
        //   property: 'scale',
        //   to: '100 100 100',
        //   easing: 'easeOutElastic',
        //   dur: 800,
        // })
      })
      text.setAttribute('visible', 'false')
    }, 10000)
  }
})
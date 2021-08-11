AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        const sidebar = document.getElementById('sidebar')
        const main = document.getElementById('main')

        const download = document.getElementById('downloadButton')
        download.innerHTML = 'Download'

        const closebtn = document.createElement('a')
        closebtn.innerHTML = "x"
        closebtn.setAttribute('href', 'javascript:void(0)')
        closebtn.onclick = this.closeBar
        closebtn.className = 'closebtn'
        closebtn.id = 'close'
        sidebar.appendChild(closebtn)
        const capturebtn = document.createElement('a')
        capturebtn.setAttribute('href', 'javascript:void(0)')
        capturebtn.innerHTML = '<img id="cameraimg" src="assets/camera.png">'
        capturebtn.onclick = this.openCapture
        capturebtn.className = 'capturebtn'
        sidebar.appendChild(capturebtn)
        const helpbtn = document.createElement('a')
        helpbtn.setAttribute('href', 'javascript:void(0)')
        helpbtn.innerHTML = '<img id="helpimg" src="assets/help.png">'
        helpbtn.onclick = this.openHelp
        helpbtn.id = 'help'
        sidebar.appendChild(helpbtn)
        
        const cameraHelp = document.createElement('span')
        cameraHelp.id = 'camHelp'
        cameraHelp.innerHTML = '❮❮❮❮ Click to take photo/video'
        container.appendChild(cameraHelp)
        const textCont = document.createElement('div')
        textCont.id = 'textcont'
        container.appendChild(textCont)
        const imgvid = document.createElement('span')
        imgvid.id = 'imgvid'
        imgvid.innerHTML = 'Click to take a photo/Press and hold for video'
        textCont.appendChild(imgvid)

        const openbtn = document.createElement('a')
        openbtn.setAttribute('href', 'javascript:void(0)')
        openbtn.onclick = this.openBar
        openbtn.innerHTML = "☰"
        openbtn.className = 'openbtn'
        openbtn.id = 'openb'
        main.appendChild(openbtn)

        const donebtn = document.createElement('a')
        donebtn.setAttribute('href', 'javascript:void(0)')
        donebtn.onclick = this.done
        donebtn.innerHTML = 'Done'
        donebtn.className = 'donebtn'
        donebtn.id = 'done'
        donebtn.style.display = "none"
        main.appendChild(donebtn)
    },

    openSlider: function () {
        sidebar.style.width = "0";
        textcont.style.display = "block"
        main.style.display = "block"
        openb.style.display = "none"
        done.style.display = "block"
        camHelp.style.display = "none"
    },

    openCapture: function () {
        document.getElementById('recorder').style.display = "block"
        textcont.style.display = "block"
        imgvid.style.display = "block"
        sidebar.style.width = "0";
        main.style.display = "block"
        openb.style.display = "none"
        done.style.display = "block"
        camHelp.style.display = "none"
     },

     openHelp: function () {
        camHelp.style.display = 'block'
     },
 
     done: function () {
         done.style.display = "none"
         openb.style.display = "block"
         imgvid.style.display = "none"
         textcont.style.display = "none"
         document.getElementById('recorder').style.display = "none"
     }, 

    closeBar: function () {
        sidebar.style.width = "0";
        main.style.display = "block"
        camHelp.style.display = "none"
    },

    openBar: function () {
        sidebar.style.width = "35%";
        main.style.display = "none"
    } 
})
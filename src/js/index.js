import { createElement, render, renderDOM } from './virtualDom';
import domDiff from './domDiff';
import doPatch from './doPatch';

const vDom1 = createElement('ul', { 
    class: 'list', 
    style: 'width: 300px; height: 300px; background-color: orange'
  }, [
    createElement('li', { 
      class: 'item', 
      'data-index': 0 
    }, [
      createElement('p', { 
        class: 'text'
      }, [
        '第1个列表项'
      ])
    ]),
    createElement('li', { 
      class: 'item', 
      'data-index': 1
    }, [
      createElement('p', { 
        class: 'text'
      }, [
        createElement('span', { 
          class: 'title' 
        }, [])
      ])
    ]),
    createElement('li', { 
      class: 'item', 
      'data-index': 2
    }, [
      '第3个列表项'
    ])
  ]);
  
const vDom2 = createElement('ul', {
  class: 'list-wrap',
  style: 'width: 300px; height: 300px; background-color: orange'
}, [
  createElement('li', {
    class: 'item',
    'data-index': 0
  }, [
    createElement('p', {
      class: 'title'
    }, [
      '特殊列表项'
    ])
  ]),
  createElement('li', {
    class: 'item',
    'data-index': 1
  }, [
    createElement('p', {
      class: 'text'
    }, [])
  ]),
  createElement('div', {
    class: 'item',
    'data-index': 2
  }, [
    '第3个列表项'
  ])
]);

const rDom = render(vDom1);
renderDOM(
  rDom,
  document.getElementById('app')
);

const patches = domDiff(vDom1, vDom2);

doPatch(rDom, patches);

console.log(patches);

// import VideoDanmu from './danmu/index.js'
// const danmuData = [
//   {
//     content: '我真的好喜欢这首钢琴曲',
//     speed: 2,
//     runTime: 0,
//     color: 'red'
//   }
// ]
//   ; ((doc) => {
//     const oDanmuVideo = doc.getElementById('J_danmuVideo')
//     const oDanmuCanvas = doc.getElementById('J_danmuCanvas')
//     const oDanmuInput = doc.getElementsByClassName('danmu-input')[0]
//     const oDanmuBtn = doc.getElementsByClassName('danmu-btn')[0]
//     const oColorInput = doc.getElementsByClassName('color-input')[0]
//     const init = () => {
//       // console.log(1)
//       window.videoDanmu = new VideoDanmu(
//         oDanmuVideo,
//         oDanmuCanvas,
//         {
//           danmuData,
//         }
//       )
//       bindEvent()
//     }

//     function bindEvent() {
//       oDanmuVideo.addEventListener('play', handleVideoPlay, false)
//       oDanmuVideo.addEventListener('pause', handleVideoPause, false)
//       oDanmuVideo.addEventListener('seeked', handleVideoSeek, false)
//       oDanmuBtn.addEventListener('click', handleDanmuBtnClick, false)
//     }

//     function handleVideoPlay() {
//       videoDanmu.danmuPaused = false
//       videoDanmu.render()
//     }

//     function handleVideoPause() {
//       videoDanmu.danmuPaused = true
//     }
//     function handleVideoSeek() {
//       videoDanmu.reset()
//     }

//     function handleDanmuBtnClick() {
//       if (videoDanmu.danmuPaused) return;

//       const inputValue = oDanmuInput.value.trim()
//       if (!inputValue.length) {
//         return
//       }

//       const colorValue = oColorInput.nodeValue
//       const currentTime = oDanmuVideo.currentTime

//       const _data = {
//         content: inputValue,
//         color: colorValue,
//         runTime: currentTime
//       }
//       videoDanmu.addDanmu(_data)
//       oDanmuInput.value = ''
//     }
//     init()
//   })(document);
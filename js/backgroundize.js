document
  .querySelector('#web_bg')
  .setAttribute('style', `background-image: ${document.querySelector('.banner').style.background.split(' ')[0]};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);

document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: url(https://0xfff.oss-cn-beijing.aliyuncs.com/uploads%2F1%2Fpicture%2F%E5%A3%81%E7%BA%B8%2F042b60d3-f327-4dee-a49b-3808fcfa1d1d_wallhaven-o53z27.jpg?Expires=1758553355&OSSAccessKeyId=LTAI5tMKKrMMms5C8BtP7sbu&Signature=N0Xvg3sWsv%2F0dyfcewBEMHDrNk4%3D)')

document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')
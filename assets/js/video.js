let PopupVidCont = document.getElementById('popup-video-cont');
let VideoCont = document.getElementById('video-container');

function showPopupVid(){
    PopupVidCont.classList.add('toggle-show-popup');
    VideoCont.classList.add('toggle-video-cont')
    document.getElementById('body').style.overflow = 'hidden';
}
function closePopup(){
    PopupVidCont.classList.remove('toggle-show-popup');
    VideoCont.classList.remove('toggle-video-cont')
    document.getElementById('body').style.overflow = 'visible';

}
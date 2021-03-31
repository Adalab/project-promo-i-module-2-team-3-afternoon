"use strict";console.log("hola");const designTop=document.querySelector(".design--top"),designBottom=document.querySelector(".design--bottom"),inputColorPalette1=document.querySelector("#color-option1"),inputColorPalette2=document.querySelector("#color-option2"),inputColorPalette3=document.querySelector("#color-option3"),cardDecoration=document.querySelector("#image--preview_text"),cardIcons=document.querySelector("#image--preview_icons");function onClickDesignTop(){designBottom.classList.toggle("design--bottom--visible"),designTop.classList.toggle("design--top--active")}function changePalette1(){cardDecoration.classList.add("color-palette1"),cardIcons.classList.add("icon-palette1"),cardDecoration.classList.remove("color-palette2"),cardIcons.classList.remove("icon-palette2"),cardDecoration.classList.remove("color-palette3"),cardIcons.classList.remove("icon-palette3")}function changePalette2(){cardDecoration.classList.add("color-palette2"),cardIcons.classList.add("icon-palette2"),cardDecoration.classList.remove("color-palette1"),cardIcons.classList.remove("icon-palette1"),cardDecoration.classList.remove("color-palette3"),cardIcons.classList.remove("icon-palette3")}function changePalette3(){cardDecoration.classList.add("color-palette3"),cardIcons.classList.add("icon-palette3"),cardDecoration.classList.remove("color-palette1"),cardIcons.classList.remove("icon-palette1"),cardDecoration.classList.remove("color-palette2"),cardIcons.classList.remove("icon-palette2")}designTop.addEventListener("click",onClickDesignTop),inputColorPalette1.addEventListener("change",changePalette1),inputColorPalette2.addEventListener("change",changePalette2),inputColorPalette3.addEventListener("change",changePalette3);const fillTop=document.querySelector(".fill--top"),fillBottom=document.querySelector(".fill--bottom");let inputName=document.querySelector("#firstName"),inputJob=document.querySelector("#addjob"),cardFullName=document.querySelector(".card--full_name"),cardFullProfession=document.querySelector(".card--full_profession");function onClickFillTop(){fillBottom.classList.toggle("fill--bottom--visible"),fillTop.classList.toggle("fill--top--active")}function printName(){cardFullName.innerHTML=inputName.value}function printJob(){cardFullProfession.innerHTML=inputJob.value}const FillIconPhone=document.querySelector("#icon1"),FillIconEmail=document.querySelector("#icon2"),FillIconLinkedin=document.querySelector("#icon3"),FillIconGithub=document.querySelector("#icon4"),FillInputPhone=document.querySelector("#addphone"),FillInputEmail=document.querySelector("#addemail"),FillInputLinkedin=document.querySelector("#addlinkedin"),FillInputGithub=document.querySelector("#addgithub"),FillButtonClose=document.querySelector(".fill--buttton"),FillFormBottom=document.querySelector(".fill--bottom");function showIconPhone(){""!==FillInputPhone.value?FillIconPhone.classList.remove("hidden--fill"):FillIconPhone.classList.add("hidden--fill")}function showIconEmail(){""!==FillInputEmail.value?FillIconEmail.classList.remove("hidden--fill"):FillIconEmail.classList.add("hidden--fill")}function showIconLinkedin(){""!==FillInputLinkedin.value?FillIconLinkedin.classList.remove("hidden--fill"):FillIconLinkedin.classList.add("hidden--fill")}function showIconGithub(){""!==FillInputGithub.value?FillIconGithub.classList.remove("hidden--fill"):FillIconGithub.classList.add("hidden--fill")}fillTop.addEventListener("click",onClickFillTop),inputName.addEventListener("keyup",printName),inputJob.addEventListener("keyup",printJob),FillInputPhone.addEventListener("keypress",showIconPhone),FillInputEmail.addEventListener("keypress",showIconEmail),FillInputLinkedin.addEventListener("keypress",showIconLinkedin),FillInputGithub.addEventListener("keypress",showIconGithub);const textErrorAll=document.querySelectorAll(".text-error"),inputFill=document.querySelectorAll(".input-fill"),fillForm=document.querySelectorAll(".fillform"),createButton=document.querySelector(".create-card--button"),nameError=document.querySelector("#text-error_name"),jobError=document.querySelector("#text-error_job"),linkedInError=document.querySelector("#text-error_linkedin"),gitHubError=document.querySelector("#text-error_git"),emailError=document.querySelector("#text-error_email"),imageError=document.querySelector("#text-error_image"),inputImage=document.querySelector("#add-image"),inputValidation=document.querySelectorAll(".input-validation"),globalError=document.querySelector("#global-error");function validateForm(){for(let e of inputFill)""!==e.value?(e.classList.remove("input-error"),nameError.classList.add("input-correct")):(e.classList.remove("input-correct"),e.classList.add("input-error"))}function validateName(){return""===inputName.value?(nameError.classList.remove("hidden"),!1):(nameError.classList.add("hidden"),!0)}function validateJob(){return""===inputJob.value?(jobError.classList.remove("hidden"),!1):(jobError.classList.add("hidden"),!0)}function validateEmail(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(FillInputEmail.value)?(emailError.classList.add("hidden"),!0):(emailError.classList.remove("hidden"),!1)}function validateLinkedin(){return""===FillInputLinkedin.value?(linkedInError.classList.remove("hidden"),!1):(linkedInError.classList.add("hidden"),!0)}function validateGithub(){return""===FillInputGithub.value?(gitHubError.classList.remove("hidden"),!1):(gitHubError.classList.add("hidden"),!0)}const imageInput=document.querySelector("#image-input");function validateImage(){const e=document.querySelector("#text-error_image");return!1===/\.(gif|jpeg|jpg|png)$/i.test(imageInput.value)?(e.classList.remove("hidden"),!0):(e.classList.add("hidden"),!1)}function disabledButton(){createButton.disabled=!0,createButton.classList.add("create-card--button--active")}function noDisableButton(e){createButton.disabled=!1,createButton.classList.remove("create-card--button--active")}function validateAll(){return!0===validateJob()&&!0===validateName()&&!0===validateEmail()&&!0===validateLinkedin()&&!0===validateGithub()?(globalError.classList.add("hidden"),noDisableButton(),!0):(globalError.classList.remove("hidden"),validateForm(),validateJob(),validateName(),validateEmail(),validateLinkedin(),validateGithub(),disabledButton(),validateImage(),!1)}imageInput.addEventListener("change",validateImage),disabledButton(),createButton.addEventListener("click",onClickCreateButton),console.log("inputValidation",inputValidation);for(var i=0;i<inputValidation.length;i++)inputValidation[i].addEventListener("keyup",validateAll);const shareTop=document.querySelector(".share--top"),shareBottom=document.querySelector(".share--bottom"),createCardContainer=document.querySelector(".created-card--container");function onClickShareTop(){shareBottom.classList.toggle("share--bottom--visible"),shareTop.classList.toggle("share--top--active")}function onClickCreateButton(){createCardContainer.classList.add("created-card--container--visible"),sendData()}shareTop.addEventListener("click",onClickShareTop),createButton.addEventListener("click",onClickCreateButton);const resetButton=document.querySelector(".button--preview");function reset(){localStorage.removeItem("Details"),inputName.value="",inputJob.value="",FillInputEmail.value="",FillInputPhone.value="",FillInputLinkedin.value="",FillInputGithub.value="",cardFullName.innerHTML="Nombre Apellidos",cardFullProfession.innerHTML="Front-end developer",inputColorPalette1.checked=!0,changePalette1(),showIconPhone(),showIconEmail(),showIconLinkedin(),showIconGithub(),setTheme(),validateForm(),chosenInput()}resetButton.addEventListener("click",reset);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);let palette1Value=inputColorPalette1.value,palette2Value=inputColorPalette2.value,palette3Value=inputColorPalette3.value,nameValue=inputName.value,jobValue=inputJob.value,telfValue=FillInputPhone.value,emailValue=FillInputEmail.value,linkedinValue=FillInputLinkedin.value,githubValue=FillInputGithub.value,localInfo={palette:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};function storePalette(){inputColorPalette2.checked?(localInfo.palette=inputColorPalette2.value,console.log(localInfo)):inputColorPalette3.checked?(localInfo.palette=inputColorPalette3.value,console.log(localInfo)):(localInfo.palette=inputColorPalette1.value,console.log(localInfo)),storeData()}function storeFullName(){localInfo.name=inputName.value,storeData()}function storeJob(){localInfo.job=inputJob.value,storeData()}function storeEmail(){localInfo.email=FillInputEmail.value,storeData()}function storeTelf(){localInfo.phone=FillInputPhone.value,storeData()}function storeLinkedin(){localInfo.linkedin=FillInputLinkedin.value,storeData()}function storeGithub(){localInfo.github=FillInputGithub.value,storeData()}function onImageLoaded(e){localInfo.photo=e.target.result,e.target.removeEventListener("load",onImageLoaded),storeData()}function storePhoto(){const e=new FileReader;e.addEventListener("load",onImageLoaded),e.readAsDataURL(imageInput.files[0])}function storeData(){localStorage.setItem("Details",JSON.stringify(localInfo))}function checkLocalStorage(){null!==localStorage.getItem("Details")&&(retrieveData(),init())}function retrieveData(){localInfo=JSON.parse(localStorage.getItem("Details")),void 0!==localInfo.palette&&(localInfo.palette===inputColorPalette2.value?(inputColorPalette2.checked=!0,inputColorPalette1.checked=!1,inputColorPalette3.checked=!1):localInfo.palette===inputColorPalette3.value?(inputColorPalette3.checked=!0,inputColorPalette2.checked=!1,inputColorPalette1.checked=!1):(inputColorPalette3.checked=!1,inputColorPalette2.checked=!1,inputColorPalette1.checked=!0)),""!==localInfo.name&&(inputName.value=localInfo.name),""!==localInfo.job&&(inputJob.value=localInfo.job),""!==localInfo.email&&(FillInputEmail.value=localInfo.email),""!==localInfo.phone&&(FillInputPhone.value=localInfo.phone),""!==localInfo.linkedin&&(FillInputLinkedin.value=localInfo.linkedin),""!==localInfo.github&&(FillInputGithub.value=localInfo.github)}function setTheme(){inputColorPalette2.checked?changePalette2():inputColorPalette3.checked?changePalette3():changePalette1()}function init(){""===inputName.value?cardFullName.innerHTML="Nombre Apellidos":printName(),""===inputJob.value?cardFullProfession.innerHTML="Front-end developer":printJob(),showIconLinkedin(),showIconGithub(),showIconPhone(),showIconEmail(),setTheme()}window.addEventListener("load",checkLocalStorage),inputColorPalette1.addEventListener("click",storePalette),inputColorPalette2.addEventListener("click",storePalette),inputColorPalette3.addEventListener("click",storePalette),inputName.addEventListener("change",storeFullName),inputJob.addEventListener("change",storeJob),FillInputEmail.addEventListener("change",storeEmail),FillInputPhone.addEventListener("change",storeTelf),FillInputLinkedin.addEventListener("change",storeLinkedin),FillInputGithub.addEventListener("change",storeGithub),imageInput.addEventListener("change",storePhoto);const urlBase="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";function sendData(){fetch(urlBase,{method:"POST",body:localStorage.getItem("Details"),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>showURL(e)).catch((function(e){console.log(e)}))}const responseURL=document.querySelector(".created-card--link");function showURL(e){e.success?(responseURL.innerHTML=`<a class="final__link" href=${e.cardURL} target="_blank">${e.cardURL}</a>`,twitterShare()):responseURL.innerHTML="ERROR:"+e.error}function twitterShare(){const e=document.querySelector(".twitter--button"),t=document.querySelector(".twitter--link"),o=document.querySelector(".created-card--link");console.log(o),t.setAttribute("href",`https://twitter.com/intent/tweet?text=${o.innerText}`),t.setAttribute("target","blank"),e.addEventListener("click",twitterShare)}
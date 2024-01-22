import{i as n,S as y}from"./assets/vendor-46aac873.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".image-search-form"),m=document.querySelector(".image-search-name"),f=document.querySelector(".loader-container");function g(){f.style.display="block"}function p(){f.style.display="none"}let u={key:"41964053-c955e63b08cf707b650cdfd9b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function d(a){u.q=a;const l=new URLSearchParams(u);g(),fetch(`https://pixabay.com/api/?${l}`).then(t=>{if(p(),!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()}).then(({hits:t})=>{const i=document.querySelector(".gallery");if(t.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=new y(".gallery a",{captionDelay:250,captionsData:"alt",close:!0}),r=t.reduce((s,o)=>s+`<a class="gallery-link" href="${o.largeImageURL}">
            <img
                class="gallery-image"
                src="${o.webformatURL}"
                alt="${o.tags}"
            />
           <ul class="gallery-info-list">
              <li class="gallery-info-item">
                  <p class="gallery-info-title">Likes</p>
                  <p class="gallery-info-value">${o.likes}</p>
              </li>
              <li class="gallery-info-item">
                  <p class="gallery-info-title">Views</p>
                  <p class="gallery-info-value">${o.views}</p>
              </li>
              <li class="gallery-info-item">
                  <p class="gallery-info-title">Comments</p>
                  <p class="gallery-info-value">${o.comments}</p>
              </li>
              <li class="gallery-info-item">
                  <p class="gallery-info-title">Downloads</p>
                  <p class="gallery-info-value">${o.downloads}</p>
              </li>
            </ul>
        </a>`,"");i.innerHTML=r,e.refresh()}).catch(t=>{n.error({title:"Error",message:t.message,position:"topRight"})})}c.addEventListener("submit",a=>{a.preventDefault();const l=m.value.trim();d(l),c.reset()});
//# sourceMappingURL=commonHelpers.js.map

import{a as f,S as d,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="55777204-657361ff26fdbc8510979d0fd",p="https://pixabay.com/api/";function y(o){return f.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"/> 
            </a>

            <ul class="info">
            <li class="info-item"><b>Likes</b><span>${t.likes}</span></li>
            <li class="info-item"><b>Views</b><span>${t.views}</span></li>
            <li class="info-item"><b>Comments</b><span>${t.comments}</span></li>
            <li class="info-item"><b>Downloads</b><span>${t.downloads}</span></li>
            </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){a.warning({message:"Please enter a search query!"});return}b(),L(),y(s).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query.Pleasetry again!"});return}h(t.hits)}).catch(t=>{a.error({message:"Something went wrong.Please try again later!"}),console.log(t)}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map

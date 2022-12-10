---
title: Download
layout: default.njk
permalink: "download/"
---

<script src="/js/download.js"></script>

<style>

#download #price {
  display: inline-block;
  margin: 0;
}
#download > #content {
  display: grid;
  align-items: start;
  justify-items: center;
}
#latest-version {
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 0 ;
  font-size: 1em;
}
#download-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: 300px 1px;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  width: 100%;
}
.separator {
  grid-column: 1 / span 3;
  justify-self: normal;
}
.separator.vertical {
  width: 1px;
  height: auto;
  grid-column: auto;
  align-self: normal;
}
#download .type-grid {
  display: flex;
}
#download .type {
  font-size: 2.75em;
  align-self: center;
  margin-left: 3rem;
}
#download .primary {
  margin: auto;
}

@media screen and (max-width: 900px) {
  #download-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }
  .separator.vertical {
    display: none
  }
  .separator {
    grid-column: 1;
    justify-self: normal;
  }
  #download .type-grid {
    margin-bottom: 2rem;
  }
}


</style>

<div class="container" id="download">
  <div id="header">
    <h1>Download</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <p id="latest-version">Latest Release: 1.0.0</p>
    <div id="download-grid">
      <div class="type-grid">
        <img class="icon" src="/img/apple.png" />
        <div class="type">Mac</div>
      </div>
      <div class="separator vertical"></div>
      <a id="mac-button" class="button primary" href="/download/mac">Download</a>
    </div>

  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>

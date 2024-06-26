<template>
    <button class="button is-primary">
        <slot></slot>
    </button>
</template>
<style>
button:focus {
  outline: 0;
}

.button {
  font-family: 'Beaufort';
  text-transform: uppercase;
  font-size: 18px;
  color: #f0e6d2;
  padding: .75rem 2rem;
}

.button.is-tiny {
  font-size: 16px;
  padding: .375rem 2rem;
  border-width: 2px !important;
}

.button[disabled] {
  border-image: linear-gradient(#4c5155, #4c5155) 1 !important;
  background: #1f242a !important;
  color: #4c5155 !important;
}

/* PRIMARY BUTTON
   ============================= */

.button.is-primary {
  border: 3px solid transparent;
  background: #1e2328;
  border-image: linear-gradient(#08abac, #01698b) 1;
  transition: all ease .5s;
}

.button.is-primary:not([disabled]):hover {
  background-image: url(img/btn.jpg);
  background-position: center center;
  background-size: cover;
  box-shadow: 0 0 10px 4px rgba(192, 252, 253, .4), inset 0 0 5px 2px rgba(192, 252, 253, .3);
  border: 3px solid rgba(192, 252, 253, .75);
  cursor: pointer;
}

/* SECONDARY BUTTON
   ============================= */

.button.is-secondary {
  border: 3px solid;
  border-radius: 0;
  background: #242731;
  border-image: linear-gradient(#f6c97f, #ca9d4b) 1;
  transition: all ease .25s;
}

.button.is-secondary:not([disabled]):hover {
  box-shadow: 0 0 5px 2px rgba(192,252,253,.4), inset 0 0 5px 2px rgba(192,252,253,.3);
  border: 3px solid #eee2cc;
  cursor: pointer;
}

/* ARROW BUTTON
   ============================= */

.arrow-button {
  display: inline-flex;
  position: relative;
  background-color: #000a17;
  padding: 5px;
  border: 1px solid #c8a763;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.arrow-button::before {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  height: 32px;
  width: 32px;
  box-sizing: border-box;
  border: 2px solid #05222d;
}

.arrow-button .main {
  shape-outside: polygon(0 0, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%);
  clip-path: polygon(0 0, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%);
  background: linear-gradient(#018699, #006284);
  height: 32px;
  min-width: 150px;
  cursor: pointer;
  border: none;
  font-family: 'Beaufort';
  font-weight: bold;
  font-size: 16px;
  color: #a3c0c0;
  text-transform: uppercase;
  position: relative;
  margin-left: -16px;
  padding: 0 48px;
}

.arrow-button .main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  shape-outside: polygon(2px 2px, calc(100% - 22px) 2px, calc(100% - 4px) 50%, calc(100% - 22px) calc(100% - 2px), 2px calc(100% - 2px));
  clip-path: polygon(2px 2px, calc(100% - 16px) 2px, calc(100% - 3px) 50%, calc(100% - 16px) calc(100% - 2px), 2px calc(100% - 2px));
  background-color: #1e222c;
  height: 32px;
  width: 100%;
  z-index: -1;
}

.arrow-button .main::after {
  content: '';
  position: absolute;
  top: -7px;
  left: -23px;
  height: 42px;
  width: 42px;
  box-sizing: content-box;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(#000a17, #000a17) padding-box, linear-gradient(#018699, #006284) border-box;
}

.arrow-button .circle {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(#202425, #202425) padding-box, linear-gradient(#c8a763, #715b29) border-box;
  color: #c5c09a;
  cursor: pointer;
  z-index: 1;
}

.arrow-button:not(.is-disabled) .main:hover {
  background: linear-gradient(#83d7ca, #1f8faf);
  color: #e2e2d8;
}

.arrow-button:not(.is-disabled) .main:hover::before {
  background: linear-gradient(#152932, #0d394a);
}

.arrow-button:not(.is-disabled) .main:hover::after {
  background: linear-gradient(#000a17, #000a17) padding-box, linear-gradient(#83d7ca, #1f8faf) border-box;
}

.arrow-button:not(.is-disabled) .circle:hover {
  background: linear-gradient(#202425, #202425) padding-box, linear-gradient(#d4cdca, #a37b2e) border-box;
  color: #f4eada;
}

.arrow-button.is-disabled .main {
  background: #4c5155;
  color: #4c5155;
}

.arrow-button.is-disabled .main::before {
  background: #1f242a;
}

.arrow-button.is-disabled .main::after {
  background: linear-gradient(#000a17, #000a17) padding-box, linear-gradient(#4c5155, #4c5155) border-box;
}

.arrow-button.is-disabled .circle {
  background: linear-gradient(#1f242a, #1f242a) padding-box, linear-gradient(#4c5155, #4c5155) border-box;
  color: #4c5155;
}
</style>
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@polymer/iron-ajax';
import '@polymer/polymer/lib/elements/dom-bind.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="whcg-lit-grid-styles" theme-for="vaadin-grid">
<template>
<style>
  :host {

    font-size: var(--parmaco-font-size-m);
    border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    border-radius: 5px 5px 4px 4px;
    box-sizing: border-box;

    /* For internal use only */
    --_lumo-grid-border-color: var(--whcg-shade-20pct);
    --_lumo-grid-secondary-border-color: var(--whcg-shade-10pct);
    --_lumo-grid-border-width: 1px;
    --_lumo-grid-selected-row-color: var(--parmaco-primary-color-10pct);
  }



  [part~="cell"] {
    font-family: var(--parmaco-font-family);
    font-size: var(--parmaco-font-size-m);
    line-height: var(--lumo-line-height-s);
    color: var(--parmaco-base-color-100pct);
    min-height: var(--parmaco-size-l);
    background-color: var(--whcg-shade-20pct);
    border-top: var(--_lumo-grid-border-width) solid var(--parmaco-transparent);
    outline: none;
  }





  [part~="header-cell"] {
    background-color: #4478A2;
  }




  


  [part="row"][first] [part~="cell"] {
    border-top: 0;
    min-height: calc(var(--parmaco-size-l) - var(--_lumo-grid-border-width));
  }





  [part="row"]:only-child [part~="header-cell"] {
    min-height: var(--lumo-size-xl);
  }

  [part="row"]:first-child [part~="header-cell"]:first-child {
    border-top: 0;
    border-radius: 4px 0 0 0;
  }

  [part="row"]:first-child [part~="header-cell"]:last-child {
    border-top: 0;
    border-radius: 0 4px 0 0;
  }

  [part="row"]:last-child [part~="header-cell"] {
    border-bottom-color: var(--_lumo-grid-secondary-border-color);
  }










  [part~="cell"] ::slotted(vaadin-grid-cell-content) {
    cursor: default;
    padding: var(--lumo-space-xs) var(--lumo-space-m);
  }

  [part~="header-cell"] ::slotted(vaadin-grid-cell-content)
  [part~="reorder-ghost"] {
    font-size: var(--lumo-font-size-s);
    font-weight: 500;
  }




</style>
</template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
<template>
<style>
  :host(.vaadin-grid-select-all-checkbox) {
    font-size: var(--parmaco-font-size-m);
  }
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

class WhcgLitGrid extends PolymerElement {
    static get template() {
        return html`
        <style>

            :root {
                background-color: transparent;
            }

            

        </style>

        <dom-bind>
            <template>
                <iron-ajax auto url="https://demo.vaadin.com/demo-data/1.0/people?count=200" handle-as="json" last-response="{{users}}"></iron-ajax>
                <vaadin-grid aria-label="Basic Binding Example" items="[[users.result]]">
                    <vaadin-grid-column width="60px" flex-grow="0">
                        <template class="header">#</template>
                        <template>[[index]]</template>
                    </vaadin-grid-column>
                    <vaadin-grid-column>
                        <template class="header">First Name</template>
                        <template>[[item.firstName]]</template>
                    </vaadin-grid-column>
                    <vaadin-grid-column>
                        <template class="header">Last Name</template>
                        <template>[[item.lastName]]</template>
                    </vaadin-grid-column>
                    <vaadin-grid-column>
                        <template class="header">Last Name</template>
                        <template>[[item.lastName]]</template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="8em">
                        <template class="header">Address</template>
                        <template>
                            <div style="white-space: normal">[[item.address.street]], [[item.address.city]]</div>
                        </template>
                    </vaadin-grid-column>
                </vaadin-grid>
            </template>
        </dom-bind>
    `;
    };   
}

window.customElements.define('whcg-lit-grid', WhcgLitGrid);

export { WhcgLitGrid };

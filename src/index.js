import '../theme/whcg-lit-grid-styles.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@polymer/iron-ajax';
import '@polymer/polymer/lib/elements/dom-bind.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export class WhcgLitGrid extends PolymerElement {
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
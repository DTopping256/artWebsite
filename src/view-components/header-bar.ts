import { LitElement, html, css } from 'lit';

export class HeaderBar extends LitElement {
    private _SiteName;

    constructor(siteName: string) {
        super();
        this._SiteName = siteName;
    }

    render() {
        return html`
            <div>
                <h1>${this._SiteName}</h1>
                ${/*this.NavMenu*/ 1}
            </div>
        `;
    }
}

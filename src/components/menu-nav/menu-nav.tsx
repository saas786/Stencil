import { Component, Prop, h } from '@stencil/core';
import { Storage } from "../../providers/storage";

@Component({
    tag: 'menu-nav',
    styleUrl: 'menu-nav.css',
})
export class MenuNav {
    @Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;

    async componentWillLoad() {
        let currentScreen = await Storage.get("CurrentScreen");
        if (currentScreen == null) {
            currentScreen = "home";
        }
    }

    async componentDidLoad() {
        const menuCtlr: HTMLIonMenuControllerElement = await (this.menuCtrl as any).componentOnReady();
        menuCtlr.enable(true);
    }

    render() {
        return [
            <ion-nav animated={false} id="sideMenuNav"></ion-nav>
        ];
    }
}
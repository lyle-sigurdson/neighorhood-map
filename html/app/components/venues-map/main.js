/*jshint browser: true */
import ko from 'knockout';
import template from './template.html!text';
import {} from './style.css!';
import mapsApi from 'google-maps-api';
import config from 'app/app-config.json!';

export default class {
    constructor(viewModel) {
        ko.components.register('venues-map', {
            viewModel: { instance: viewModel },
            template: template
        });

        mapsApi(config.googleApiKey)().then(maps => {
            let map = new maps.Map(document.getElementById('venues-map--map'), {
                center: { lat: -34.39, lng: 150.644 },
                zoom: 8
            });

            let marker = new maps.Marker({
                map: map,
                position: { lat: -34.39, lng: 150.644 }
            });

            setInterval(() => {
                marker.setVisible(!marker.getVisible());
            }, 1000);
        });
    }
}

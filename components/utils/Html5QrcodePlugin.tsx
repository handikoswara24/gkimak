import { Html5QrcodeScanner } from "html5-qrcode";
import React from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

class Html5QrcodePlugin extends React.Component {
    html5QrcodeScanner: Html5QrcodeScanner | undefined;

    render() {
        return <div id={qrcodeRegionId} className="w-80 mx-auto" />;
    }

    componentWillUnmount() {
        // TODO(mebjas): See if there is a better way to handle
        //  promise in `componentWillUnmount`.
        this.html5QrcodeScanner!.clear().catch(error => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
        });
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        function createConfig(props: any) {
            var config: any = {};
            if (props.fps) {
                config.fps = props.fps;
            }
            if (props.qrbox) {
                config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
                config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
                config.disableFlip = props.disableFlip;
            }
            return config;
        }

        var config = createConfig(this.props);
        var verbose = (this.props as any).verbose === true;

        // Suceess callback is required.
        if (!((this.props as any).qrCodeSuccessCallback)) {
            throw Error("qrCodeSuccessCallback is required callback.");
        }

        this.html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
        this.html5QrcodeScanner.render(
            (this.props as any).qrCodeSuccessCallback,
            (this.props as any).qrCodeErrorCallback);
    }
};

export default Html5QrcodePlugin;
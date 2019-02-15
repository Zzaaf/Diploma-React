import React, {Component} from 'react';
import img404 from './error404.png';
import imgDefault from './errorDefault.jpg';
import imgFatal from './errorFatal.gif';

export default class  ErrorMessage extends Component {

    render() {
        const {typeError} = this.props;
        let imgName;
        switch(typeError) {
            case 'fatal': {
                imgName = imgFatal;
                break;
            }
            case '404': {
                imgName = img404;
                break;
            }
            default: {
                imgName = imgDefault;
                break;
            }
        }
        return (
                    <img className="error-img" src={imgName} alt='Error'></img>
        )
    }
}


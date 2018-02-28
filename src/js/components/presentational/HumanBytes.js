import React from "react";
import PropTypes from 'prop-types'

const HumanBytes = ({bytes = 0, si = false}) => {
    let thresh = si ? 1000 : 1024;
    let view = '';

    if(Math.abs(bytes) < thresh)
    {
        view = bytes + ' B';
    }
    else
    {
        var units = si
            ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
            : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
        var u = -1;

        do 
        {
            bytes /= thresh;
            ++u;
        } while(Math.abs(bytes) >= thresh && u < units.length - 1);

        view = bytes.toFixed(1)+' '+units[u];
    }

    return (<span>{view}</span>);
};

HumanBytes.propTypes = {
    bytes: PropTypes.number.isRequired,
    si: PropTypes.bool
}

export default HumanBytes;
import '../node_modules/gsg-common-style/less/index.less';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGBlockquote extends React.Component {
  render() {

    let _bClass = {};

    if (this.props.isReverse) {
      _bClass = objectAssign(_bClass, {
        'blockquote-reverse': true
      });
    }

    _bClass = classNames(_bClass);

    return(
      <blockquote className={_bClass}>
        {this.props.children}
      </blockquote>
    );
  }
};

GSGBlockquote.propTypes = {
  isReverse: PropTypes.bool
};

GSGBlockquote.defaultProps = {
  isReverse: false
};

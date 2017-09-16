/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

import UserActions from './data/UserActions';

UserActions.addUser('Jane', 'Smith', '123 Main St., Anytown USA');
UserActions.addUser('Bill', 'Denbrough', '76 Witcham St., Derry, ME');
UserActions.addUser('Arya', 'Stark', 'Winterfell, Westros');

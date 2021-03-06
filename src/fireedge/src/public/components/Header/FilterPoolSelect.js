/* Copyright 2002-2019, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

import React from 'react';

import { Box } from '@material-ui/core';

import { FILTER_POOL } from 'client/constants';
import useAuth from 'client/hooks/useAuth';
import GroupSelect from '../FormControl/GroupSelect';

const FilterPoolSelect = () => {
  const { setPrimaryGroup } = useAuth();

  const handleChangeFilter = evt => {
    console.log(evt);
    // setPrimaryGroup({ group:  });
  };

  return <GroupSelect handleChange={handleChangeFilter} />;
};

export default FilterPoolSelect;

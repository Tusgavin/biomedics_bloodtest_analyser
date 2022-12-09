import React from "react";
import { Table } from 'antd';

import { data, columns } from './mock/mock';

export const Tableview = () => {
   return (
      <Table columns={columns} dataSource={data} bordered />
   )
};
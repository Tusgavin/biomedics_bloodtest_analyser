import React from "react";
import { Table } from 'antd';

import { data, columns } from './mock/mock';

export const Tableview = ({ exam }) => {
   return (
      <Table columns={columns} dataSource={exam} bordered />
   )
};
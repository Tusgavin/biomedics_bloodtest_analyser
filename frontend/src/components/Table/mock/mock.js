export const data = Array(100).fill({
   date: '21/01/2022',
   plaquetas: '170000',
   leucocitos: '4490',
   hemacias: '5,07',
   vcm: '48',
   hcm: '95'
});

export const columns = [
   {
      title: 'Data',
      dataIndex: 'date'
   },
   {
      title: 'Plaquetas',
      dataIndex: 'plaquetas'
   },
   {
      title: 'Leucócitos',
      dataIndex: 'leucocitos'
   },
   {
      title: 'Hemácias',
      dataIndex: 'hemacias'
   },
   {
      title: 'V.C.M.',
      dataIndex: 'vcm'
   },
   {
      title: 'H.C.M.',
      dataIndex: 'hcm'
   },
];
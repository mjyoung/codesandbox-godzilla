export default `const createSpeed = (z, bundle) => {
  const {
    inputData: { from, to },
  } = bundle;
  const response = z.request({
    method: 'GET',
    url: '/api/convert',
    params: {
      from,
      to,
    },
  });
  return response;
};
`;

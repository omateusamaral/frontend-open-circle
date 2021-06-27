/* eslint-disable no-param-reassign */
function maskPhone(value: string) {
  value = value.replace(/\D/g, '');
  // (11)1111-1111
  value = value.replace(/^(\d{2})(\d)/g, '($1)$2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
}

function maskCPFCPNJ(value: string) {
  value = value.replace(/\D/g, '');

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  } else {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  }
  return value;
}
export { maskPhone, maskCPFCPNJ };

export const info = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'index'
      });
    }, 100)
  });
}
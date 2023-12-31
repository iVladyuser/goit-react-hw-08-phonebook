import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <FallingLines
        position="center-center"
        color="rgba(6, 71, 80, 0.959)"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export const SpinerDel = () => (
  <FallingLines
    position="center-center"
    color="rgba(6, 71, 80, 0.959)"
    width="40"
    visible={true}
    ariaLabel="falling-lines-loading"
  />
);

import commonjs from 'rollup-plugin-commonjs';
export default {
  esm: 'rollup',
  disableTypeCheck: true, //禁用类型检测
  extraRollupPlugins: [commonjs()],
};

import { InputOptions, OutputOptions, rollup } from "rollup";

const build = async ({ input, output }: { input: InputOptions; output: OutputOptions }) => {
  const bundle = await rollup(input);
  return bundle.write(output);
};

export default build;

declare module "rnnoise-win" {
  /**
   * Suppress noise in an audio file.
   *
   * @param inputPath - The path to the input audio file.
   * @param outputPath - The path to the output audio file where the denoised audio will be saved.
   * @returns The length of the denoised buffer.
   */
  export function suppress(inputPath: string, outputPath: string): number;
}

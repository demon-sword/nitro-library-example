import { NitroModules } from 'react-native-nitro-modules';
import type { NitroLibraryExample } from './NitroLibraryExample.nitro';

const NitroLibraryExampleHybridObject =
  NitroModules.createHybridObject<NitroLibraryExample>('NitroLibraryExample');

export function multiply(a: number, b: number): number {
  return NitroLibraryExampleHybridObject.multiply(a, b);
}

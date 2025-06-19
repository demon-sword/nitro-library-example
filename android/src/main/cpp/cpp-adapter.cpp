#include <jni.h>
#include "nitrolibraryexampleOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitrolibraryexample::initialize(vm);
}

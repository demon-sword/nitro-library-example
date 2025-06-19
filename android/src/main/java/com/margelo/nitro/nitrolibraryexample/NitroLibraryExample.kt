package com.margelo.nitro.nitrolibraryexample
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class NitroLibraryExample : HybridNitroLibraryExampleSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}

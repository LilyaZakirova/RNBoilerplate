import React from "react"
import { View, Text } from "react-native"
import { measurePerformance } from "reassure"

test("Simple test", async () => {
  await measurePerformance(
    <>
      <View>
        <Text>Test</Text>
      </View>
      <View>
        <Text>Test</Text>
      </View>
      <View>
        <Text>Test</Text>
      </View>
    </>,
  )
})

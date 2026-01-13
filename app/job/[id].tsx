// app/job/[id].tsx
import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { jobs } from '../../data/jobs';

export default function JobDetail() {
  const { id } = useLocalSearchParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg text-gray-600">❌ ไม่พบข้อมูลงาน</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="bg-blue-50 px-4 pt-6 pb-8">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            {job.title}
          </Text>
          <Text className="text-lg text-gray-600 mb-4">
            🏢 {job.company}
          </Text>

          <View className="flex-row flex-wrap gap-2">
            <View className="bg-blue-100 px-4 py-2 rounded-lg">
              <Text className="text-sm text-blue-700 font-medium">
                📍 {job.location}
              </Text>
            </View>
            <View className="bg-green-100 px-4 py-2 rounded-lg">
              <Text className="text-sm text-green-700 font-medium">
                ⏰ {job.type}
              </Text>
            </View>
          </View>
        </View>

        <View className="px-4 pt-6">
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-2">
              💰 เงินเดือน
            </Text>
            <View className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <Text className="text-base text-orange-700 font-semibold">
                {job.salary}
              </Text>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-2">
              📝 รายละเอียดงาน
            </Text>
            <Text className="text-base text-gray-700 leading-6">
              {job.description}
            </Text>
          </View>

          <View className="mb-8">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              ✅ คุณสมบัติที่ต้องการ
            </Text>
            {job.requirements.map((req, index) => (
              <View key={index} className="flex-row mb-3 bg-gray-50 p-3 rounded-lg">
                <Text className="text-blue-600 mr-3 text-base">•</Text>
                <Text className="text-base text-gray-700 flex-1 leading-6">
                  {req}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
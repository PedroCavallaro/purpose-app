import { Providers } from "@/providers/providers";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
	return (
		<Providers>
			<Stack>
				<Stack.Screen name="home"></Stack.Screen>
			</Stack>
			<StatusBar style="auto" />
		</Providers>
	);
}

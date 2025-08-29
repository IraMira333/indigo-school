import { NextRequest, NextResponse } from "next/server";

import {
    sendDataToGoogleSheet,
    sendTelegramNotification,
} from "@/utils/sendDataToGoogleSheet";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_APPLICATION_SPREADSHEET_ID || "";

const RANGE = "Аркуш1!A2:G2";

export async function POST(request: NextRequest) {
    try {
        const { name, phone, age, language, online, group } =
            await request.json();
        const date = new Date().toLocaleString();

        await sendDataToGoogleSheet(SPREADSHEET_ID, RANGE, [
            name,
            phone,
            age,
            language,
            online,
            group,
            date,
        ]);
        await sendTelegramNotification(
            `📩 Нова заявка!\n\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n🎂 Вік: ${age}\n📚 Мова: ${language}\n📍 Формат: ${online}\n👥 Тип: ${group}\n🕒 Час: ${date}`
        );

        return NextResponse.json({ message: "Data appended successfully" });
    } catch (error) {
        console.error(
            "🚨 Google Sheets API error:",
            JSON.stringify(error, null, 2)
        );
        return NextResponse.json(
            { error: "Failed to append data to the sheet", details: error },
            { status: 500 }
        );
    }
}

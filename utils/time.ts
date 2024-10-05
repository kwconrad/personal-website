import { Option } from "@/types/ui";

function generateMilitaryTimeOptions() {
  const timeOptions: Option[] = [];

  // Loop through each hour (0 to 23)
  for (let hour = 0; hour < 24; hour++) {
    // Format the hour as HH:00
    const hourStr = hour.toString().padStart(2, "0"); // Ensure two digits for hour
    const label = `${hourStr}:00`;

    // Calculate milliseconds since midnight (for hours only, minute is always 0)
    const millisecondsSinceMidnight = String(hour * 60 * 60 * 1000);

    // Push the object to the array
    timeOptions.push({
      label: label,
      value: millisecondsSinceMidnight,
    });
  }

  return timeOptions;
}

export { generateMilitaryTimeOptions };

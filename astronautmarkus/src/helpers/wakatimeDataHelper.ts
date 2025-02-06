export interface ActivityEntry {
  range: { date: string };
  grand_total: { total_seconds: number };
}

export interface LanguageEntry {
  color: string;
  name: string;
  percent: number;
}

export interface OSUsageEntry {
  color: string;
  name: string;
  percent: number;
}

export const fetchActivityData = async (): Promise<ActivityEntry[]> => {
  const response = await fetch("https://wakatime.com/share/@AstronautMarkus/678807b3-e69a-4a62-83d5-8abe7c01f950.json");
  const data = await response.json();
  return data.data;
};

export const fetchLanguageData = async (): Promise<LanguageEntry[]> => {
  const response = await fetch("https://wakatime.com/share/@AstronautMarkus/6e3b981a-a628-4e63-82f5-050e12729732.json");
  const data = await response.json();
  return data.data.slice(0, 5);
};

export const fetchOSUsageData = async (): Promise<OSUsageEntry[]> => {
  const response = await fetch("https://wakatime.com/share/@AstronautMarkus/be109b51-c692-4817-adb6-c09ca597f934.json");
  const data = await response.json();
  return data.data;
};

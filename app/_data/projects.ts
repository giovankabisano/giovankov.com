export type Project = {
  name: string
  description: string
  image: string
  link: string
  github?: string
  android?: string
  ios?: string
  tech?: string[]
  category: "work" | "oss" | "side"
}

export const projects: Project[] = [
  {
    name: "Peduli Lindungi / Satu Sehat",
    description: `The Indonesia COVID-19 tracker app, officially endorsed by the government under the Ministry of Health.<br/><br/>Co-initiated the idea, crafted a prototype, and presented it to one of Indonesia's ministers. The project was subsequently transferred to government ownership and evolved into the national health platform Satu Sehat.`,
    image: "https://diskominfo.natunakab.go.id/wp-content/uploads/2021/09/20210910-Aplikasi-PeduliLindungi-1.jpeg",
    link: "https://satusehat.kemkes.go.id/dashboard/",
    android: "https://play.google.com/store/apps/details?id=com.telkom.tracencare",
    ios: "https://apps.apple.com/id/app/satusehat-mobile/id1504600374",
    tech: ["Android", "Kotlin"],
    category: "work",
  },
  {
    name: "Galaxy Buds Client for Windows & Ubuntu",
    description: "Collaborated on an open source project to create a powerful sound management software for Samsung Galaxy Buds. Available on Flathub for Linux users.",
    image: "https://raw.githubusercontent.com/timschneeb/GalaxyBudsClient/master/screenshots/app_dark.png",
    github: "https://github.com/ThePBone/GalaxyBudsClient",
    link: "https://flathub.org/apps/me.timschneeberger.GalaxyBudsClient",
    tech: ["C#", ".NET"],
    category: "oss",
  },
]

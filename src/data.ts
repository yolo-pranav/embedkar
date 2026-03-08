import { Entry } from './types';

export const MOCK_ENTRIES: Entry[] = [
  {
    metadata: {
      id: "PCB-001",
      title: "The Law of Grounding",
      category: "PCB Design",
      tags: ["EMC", "Grounding", "Signal Integrity"],
      difficulty: "Intermediate",
      type: "Hardware",
      lastUpdated: "2026-03-07"
    },
    principle: "A return path must be as direct as the forward path.",
    explanation: "In high-speed digital design, the return current follows the path of least inductance, not least resistance. This usually means it flows directly underneath the signal trace on the reference plane.",
    example: "When routing a 100MHz clock, ensure a solid ground plane exists directly beneath the trace with no splits or gaps.",
    checklist: [
      "Check for split ground planes under high-speed signals.",
      "Ensure decoupling capacitors are close to power pins.",
      "Minimize via count on critical signal paths."
    ],
    relatedTopics: ["Differential Pairs", "Impedance Matching"]
  },
  {
    metadata: {
      id: "FW-001",
      title: "Deterministic Execution",
      category: "Firmware",
      tags: ["RTOS", "Timing", "Interrupts"],
      difficulty: "Advanced",
      type: "Software",
      lastUpdated: "2026-03-07"
    },
    principle: "Code must behave predictably under all timing conditions.",
    explanation: "Embedded systems often interact with the physical world in real-time. Non-deterministic code (like unbounded loops or dynamic memory allocation) can lead to catastrophic failures.",
    example: "Use a Fixed Priority Preemptive Scheduler for mission-critical tasks to ensure high-priority events are handled within their deadlines.",
    checklist: [
      "Analyze worst-case execution time (WCET).",
      "Avoid malloc() in real-time loops.",
      "Use hardware timers for precise event triggering."
    ],
    relatedTopics: ["Interrupt Latency", "Priority Inversion"]
  },
  {
    metadata: {
      id: "ARCH-001",
      title: "The Principle of Least Privilege",
      category: "Architecture",
      tags: ["Security", "Isolation", "MPU"],
      difficulty: "Intermediate",
      type: "Architecture",
      lastUpdated: "2026-03-07"
    },
    principle: "A module should only have access to the resources it strictly needs.",
    explanation: "By isolating components using Memory Protection Units (MPU) or hardware firewalls, you prevent a bug in one module (like a network stack) from compromising the entire system.",
    example: "Configure the MPU to grant the display driver access only to the frame buffer and its own registers.",
    checklist: [
      "Identify critical vs non-critical modules.",
      "Define memory boundaries for each task.",
      "Implement secure boot and firmware updates."
    ]
  }
];

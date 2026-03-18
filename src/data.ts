import { Entry } from './types';

export const MOCK_ENTRIES: Entry[] = [
  {
    metadata: {
      id: "CORE-001",
      title: "The Law of Physical Constraints",
      category: "Core Laws",
      tags: ["Physics", "Constraints", "Design"],
      difficulty: "Basic",
      type: "Philosophy",
      lastUpdated: "2026-03-17"
    },
    principle: "Respect the physical limits of the universe; they are non-negotiable.",
    explanation: "Unlike pure software, embedded systems are bound by the laws of physics—speed of light, thermal conductivity, and electron migration. A design that ignores these is destined for failure.",
    example: "Designing a high-speed bus without considering trace length matching and signal propagation delay.",
    checklist: [
      "Identify all physical bottlenecks (power, heat, space).",
      "Validate timing margins against physical propagation delays.",
      "Ensure thermal dissipation paths are physically viable.",
      "Never assume 'ideal' components in a real-world circuit."
    ]
  },
  {
    metadata: {
      id: "CORE-002",
      title: "The Law of State Integrity",
      category: "Core Laws",
      tags: ["State Machine", "Logic", "Firmware"],
      difficulty: "Intermediate",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "A system must always exist in a known, valid state.",
    explanation: "Undefined states are the primary cause of system hangs and erratic behavior. Every possible input combination must lead to a defined state transition.",
    example: "Using an enum for a state machine but failing to handle the 'default' case in a switch statement.",
    checklist: [
      "Define a formal state transition diagram.",
      "Handle all 'impossible' states gracefully.",
      "Initialize all variables and hardware registers to known values.",
      "Use CRC or checksums to verify the integrity of stored states."
    ]
  },
  {
    metadata: {
      id: "REL-001",
      title: "The Law of Redundancy",
      category: "Reliability",
      tags: ["Safety", "Fault Tolerance", "Redundancy"],
      difficulty: "Advanced",
      type: "Architecture",
      lastUpdated: "2026-03-17"
    },
    principle: "Critical paths must have a fallback mechanism.",
    explanation: "In mission-critical systems, a single point of failure is unacceptable. Redundancy—whether in hardware (dual sensors) or software (checksums)—ensures the system can fail-safe.",
    example: "Using two independent temperature sensors to monitor a battery pack; if they disagree, the system enters a safe shutdown mode.",
    checklist: [
      "Identify all single points of failure in the system.",
      "Implement watchdog timers to recover from software hangs.",
      "Use error-correcting code (ECC) for critical memory regions.",
      "Design fail-safe states for all actuators and outputs."
    ]
  },
  {
    metadata: {
      id: "REL-002",
      title: "The Law of Observability",
      category: "Reliability",
      tags: ["Logging", "Telemetry", "Debugging"],
      difficulty: "Intermediate",
      type: "Workflow",
      lastUpdated: "2026-03-17"
    },
    principle: "A system you cannot observe is a system you cannot trust.",
    explanation: "Reliability requires the ability to diagnose issues in the field. Telemetry, logging, and heartbeat signals are essential for understanding system health without physical access.",
    example: "Implementing a 'heartbeat' LED or a serial debug port that outputs periodic system status packets.",
    checklist: [
      "Implement a system-wide logging level (Info, Warn, Error).",
      "Ensure critical errors are stored in non-volatile memory (EEPROM/Flash).",
      "Provide a way to query system health remotely.",
      "Use hardware test points for critical signals on the PCB."
    ]
  },
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
  },
  {
    metadata: {
      id: "PCB-002",
      title: "Component Placement Strategy",
      category: "PCB Design",
      tags: ["Layout", "Assembly", "Thermal"],
      difficulty: "Basic",
      type: "Hardware",
      lastUpdated: "2026-03-17"
    },
    principle: "Group components by function and fix must-have parts first.",
    explanation: "Place fixed items like connectors and mounting holes first. Then, cluster related circuits (sensors, regulators) to minimize trace lengths. Place high-pin count ICs centrally and align connectors to enclosure edges.",
    example: "Place decoupling capacitors as close as possible to the IC power pins to minimize the loop area and reduce EMI.",
    checklist: [
      "Fix connectors and mounting holes first.",
      "Group digital ICs together, separate from sensitive analog circuitry.",
      "Maintain at least 1mm spacing between parts for assembly.",
      "Place decoupling capacitors very close to power pins."
    ],
    relatedTopics: ["Thermal Relief", "EMI Considerations"]
  },
  {
    metadata: {
      id: "PCB-003",
      title: "Power & Ground Plane Integrity",
      category: "PCB Design",
      tags: ["Power", "Grounding", "Stack-up"],
      difficulty: "Intermediate",
      type: "Hardware",
      lastUpdated: "2026-03-17"
    },
    principle: "Use continuous ground planes and avoid splitting them.",
    explanation: "A continuous ground plane provides a low-impedance return path. Instead of splitting planes, segregate analog and digital sections over the same ground layer to maintain a solid return path.",
    example: "On a 4-layer board, use Layer 2 as a solid ground plane and Layer 3 as a power plane.",
    checklist: [
      "Use solid planes for ground and power.",
      "Avoid splitting the ground plane; use segregation instead.",
      "Keep power traces wide (~100 mil for 5-10A).",
      "Prioritize continuous return paths in the stack-up."
    ],
    relatedTopics: ["Decoupling & PDN", "Stack-up Design"]
  },
  {
    metadata: {
      id: "PCB-004",
      title: "Thermal Relief & Heat Dissipation",
      category: "PCB Design",
      tags: ["Thermal", "Soldering", "Power"],
      difficulty: "Intermediate",
      type: "Hardware",
      lastUpdated: "2026-03-17"
    },
    principle: "Use thermal relief spokes for pads tied to large copper areas.",
    explanation: "Thermal relief spokes prevent the copper plane from acting as a massive heat sink during soldering, which can lead to cold joints. Distribute heat-generating parts apart to avoid hot spots.",
    example: "For through-hole components connected to a ground plane, ensure thermal relief is enabled in the CAD tool.",
    checklist: [
      "Use thermal relief spokes for through-hole pads on planes.",
      "Distribute high-power components across the board.",
      "Add heatsinks or fans for power ICs as needed.",
      "Use stitching vias to transfer heat to other layers."
    ],
    relatedTopics: ["Component Placement", "Power Design"]
  },
  {
    metadata: {
      id: "PCB-005",
      title: "EMI Considerations & Shielding",
      category: "PCB Design",
      tags: ["EMI", "EMC", "Shielding"],
      difficulty: "Advanced",
      type: "Hardware",
      lastUpdated: "2026-03-17"
    },
    principle: "Separate analog and high-frequency digital sections.",
    explanation: "Electromagnetic interference can degrade signal integrity. Keep noisy traces away from sensitive analog circuits. Include ground stitching vias around noisy modules and use shield planes if needed.",
    example: "Route clock signals away from the edge of the board and away from sensitive RF/analog paths.",
    checklist: [
      "Keep analog and high-frequency digital sections separated.",
      "Route clocks and noisy traces away from sensitive circuits.",
      "Include ground stitching vias around noisy modules.",
      "Use shield planes or cans for critical RF sections."
    ],
    relatedTopics: ["Grounding", "Signal Integrity"]
  },
  {
    metadata: {
      id: "FW-002",
      title: "Defensive Programming in Embedded C",
      category: "Firmware",
      tags: ["Safety", "Robustness", "C"],
      difficulty: "Intermediate",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "Validate all inputs and states to prevent system lock-ups.",
    explanation: "Embedded systems must handle unexpected inputs gracefully. Use pointer bound checks, timeouts for hardware interactions, and watchdog resets to ensure the system remains responsive.",
    example: "When reading from an I2C sensor, implement a timeout in the wait loop to prevent the CPU from hanging if the sensor fails.",
    checklist: [
      "Validate all function inputs and state transitions.",
      "Check pointer bounds before access.",
      "Implement watchdog resets for critical loops.",
      "Use assertions in debug builds to catch issues early."
    ],
    relatedTopics: ["Error Handling", "Watchdog Timers"]
  },
  {
    metadata: {
      id: "FW-003",
      title: "Memory Constraint Management",
      category: "Firmware",
      tags: ["RAM", "Stack", "Allocation"],
      difficulty: "Advanced",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "Prefer static allocation and avoid deep recursion.",
    explanation: "Dynamic memory allocation (malloc) is risky in embedded systems due to fragmentation and non-determinism. Static allocation ensures memory availability at compile time. Monitor stack usage to prevent overflows.",
    example: "Define all large buffers as static arrays rather than using heap allocation.",
    checklist: [
      "Use static allocation for all critical buffers.",
      "Avoid deep recursion or excessive stack usage.",
      "Profile RAM and stack usage in real-world conditions.",
      "Use fixed-width types (uint32_t, etc.) for predictability."
    ],
    relatedTopics: ["Heap Management", "Stack Overflow"]
  },
  {
    metadata: {
      id: "FW-004",
      title: "Coding Standards & MISRA Compliance",
      category: "Firmware",
      tags: ["Standards", "MISRA", "Style"],
      difficulty: "Intermediate",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "Adhere to safety standards like MISRA C/C++.",
    explanation: "Coding standards eliminate unsafe language features (like pointer aliasing or unchecked casts) to reduce bugs and security risks. Use a consistent style guide for descriptive names and uniform indentation.",
    example: "Use lowercase with underscores for functions and ALL_CAPS for constants as per the project style guide.",
    checklist: [
      "Establish and follow a project style guide.",
      "Adhere to MISRA C/C++ for critical systems.",
      "Eliminate unsafe language features (pointer aliasing, etc.).",
      "Keep interrupt routines minimal and postpone work to tasks."
    ],
    relatedTopics: ["Defensive Programming", "Static Analysis"]
  },
  {
    metadata: {
      id: "FW-005",
      title: "Static Analysis & Testing",
      category: "Firmware",
      tags: ["Testing", "Linting", "Unit Test"],
      difficulty: "Advanced",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "Integrate linters and static analyzers in the build pipeline.",
    explanation: "Static analysis catches bugs without executing the code. Unit tests verify individual modules in isolation. Automated testing on every commit ensures high code quality and prevents regressions.",
    example: "Integrate 'cppcheck' or 'clang-tidy' into the Jenkins or GitHub Actions pipeline.",
    checklist: [
      "Integrate linters and static analyzers in the build pipeline.",
      "Automate compilation warnings as errors.",
      "Write hardware-agnostic unit tests using Unity or GoogleTest.",
      "Measure code coverage on critical modules."
    ],
    relatedTopics: ["Continuous Integration", "Debugging"]
  },
  {
    metadata: {
      id: "TOOLS-001",
      title: "Continuous Integration for Hardware",
      category: "Tools",
      tags: ["CI/CD", "Git", "Automation"],
      difficulty: "Intermediate",
      type: "Workflow",
      lastUpdated: "2026-03-17"
    },
    principle: "Automate builds, tests, and linting on every commit.",
    explanation: "CI pipelines catch regressions early. For embedded projects, this includes compiling for the target architecture, running unit tests with mocks, and performing static analysis.",
    example: "Use GitHub Actions to run 'cppcheck' and 'Unity' unit tests whenever code is pushed to the main branch.",
    checklist: [
      "Host all design files (code and schematics) in Git.",
      "Set up CI to auto-build firmware and run linters.",
      "Integrate static analyzers like clang-tidy in the pipeline.",
      "Treat PCB schematics like code with pull request reviews."
    ],
    relatedTopics: ["Static Analysis", "Unit Testing"]
  },
  {
    metadata: {
      id: "TOOLS-002",
      title: "Simulation & Analysis Tools",
      category: "Tools",
      tags: ["Simulation", "SPICE", "Analysis"],
      difficulty: "Intermediate",
      type: "Workflow",
      lastUpdated: "2026-03-17"
    },
    principle: "Use SPICE simulators to verify analog circuits.",
    explanation: "Simulating circuits before building hardware saves time and cost. Use SPICE for analog verification and specialized tools for high-speed signal or power integrity analysis.",
    example: "Use LTspice to verify the stability of a custom power regulator circuit before layout.",
    checklist: [
      "Use SPICE simulators (LTspice, PSpice) for analog circuits.",
      "Perform SI/PI analysis for high-speed designs.",
      "Use thermal simulators to identify hot spots early.",
      "Keep all component libraries updated and consistent."
    ],
    relatedTopics: ["PCB/EDA Tools", "Debugging"]
  },
  {
    metadata: {
      id: "CHK-001",
      title: "Production Preparation Checklist",
      category: "Checklists",
      tags: ["Manufacturing", "DFM", "Gerber"],
      difficulty: "Basic",
      type: "Checklist",
      lastUpdated: "2026-03-17"
    },
    principle: "Verify all manufacturing outputs before fabrication.",
    explanation: "Errors in Gerber files or BOMs lead to costly scrap. A thorough review of all production files ensures the board can be manufactured and assembled correctly.",
    example: "Use a Gerber viewer to verify the solder mask expansion and drill hole alignment before sending files to the fab house.",
    checklist: [
      "Generate and check Gerber, drill, and pick-and-place files.",
      "Verify footprints against the BOM and datasheets.",
      "Include manufacturing notes (finish types, impedance).",
      "Ensure zero critical DRC/ERC errors remain."
    ],
    relatedTopics: ["Design for Manufacturing", "Final Reviews"]
  },
  {
    metadata: {
      id: "CHK-002",
      title: "Firmware Release Checklist",
      category: "Checklists",
      tags: ["Release", "Firmware", "VCS"],
      difficulty: "Basic",
      type: "Checklist",
      lastUpdated: "2026-03-17"
    },
    principle: "Freeze a release branch and archive final binaries.",
    explanation: "A structured release process ensures that the exact version of code running in the field can be reproduced and debugged. Archive both source code and the final hex/binary files.",
    example: "Tag the release version in Git and upload the compiled .hex file to the project's release artifacts.",
    checklist: [
      "Freeze a 'release' branch in version control.",
      "Archive the final hex/binary along with the source code.",
      "Maintain a changelog of important fixes and features.",
      "Verify that all unit tests and static analysis pass."
    ],
    relatedTopics: ["Version Control", "Documentation"]
  },
  {
    metadata: {
      id: "ARCH-002",
      title: "Layered Architecture & HAL",
      category: "Architecture",
      tags: ["HAL", "Drivers", "Abstraction"],
      difficulty: "Intermediate",
      type: "Software",
      lastUpdated: "2026-03-17"
    },
    principle: "Separate hardware-abstraction (drivers) from application logic.",
    explanation: "A layered architecture allows the application logic to remain portable across different hardware platforms. The Hardware Abstraction Layer (HAL) provides a consistent API for interacting with peripherals.",
    example: "Instead of calling register-level code in your main loop, call a generic 'sensor_read()' function provided by the HAL.",
    checklist: [
      "Define clear boundaries between layers.",
      "Use a HAL to abstract hardware-specific details.",
      "Ensure drivers are modular and reusable.",
      "Avoid direct register access in the application layer."
    ],
    relatedTopics: ["Deterministic Execution", "Memory Management"]
  },
  {
    metadata: {
      id: "DEBUG-001",
      title: "In-Circuit Debugging & Simulation",
      category: "Debugging",
      tags: ["JTAG", "SWD", "GDB"],
      difficulty: "Intermediate",
      type: "Workflow",
      lastUpdated: "2026-03-17"
    },
    principle: "Use in-circuit debuggers for source-level debugging.",
    explanation: "Tools like JTAG/SWD (ST-Link, J-Link) allow you to step through code, set breakpoints, and inspect memory on the live target. Simulators like QEMU or Renode can test logic before hardware is ready.",
    example: "Use GDB with an ST-Link to debug a stack overflow issue by inspecting the stack pointer at a breakpoint.",
    checklist: [
      "Use JTAG/SWD for real-time debugging.",
      "Employ simulators (QEMU, Renode) for early logic testing.",
      "Include extensive logging over serial or network for run-time analysis.",
      "Always have an oscilloscope and logic analyzer available."
    ],
    relatedTopics: ["Static Analysis", "Tools & Workflows"]
  },
  {
    metadata: {
      id: "PHIL-001",
      title: "The Dharma of Reliability",
      category: "Philosophy",
      tags: ["Reliability", "Trust", "Ethics"],
      difficulty: "Basic",
      type: "Philosophy",
      lastUpdated: "2026-03-17"
    },
    principle: "Reliability is the first and most important law.",
    explanation: "Embedded systems often control critical infrastructure or medical devices. The 'Dharma' of an engineer is to ensure that the machine is worthy of the trust placed in it by users and society.",
    example: "Prioritizing a robust error-handling mechanism over a new feature when deadlines are tight.",
    checklist: [
      "Design for failure: what happens if a sensor fails?",
      "Prioritize system stability over performance optimization.",
      "Acknowledge the responsibility of building life-critical systems.",
      "Continuously refine your principles through the Sabha."
    ],
    relatedTopics: ["Safety & Security", "Defensive Programming"]
  }
];

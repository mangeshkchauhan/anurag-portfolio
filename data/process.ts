import { Target, Zap, Code } from 'lucide-react';
import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    icon: Target,
    title: 'Strategy & Modeling',
    desc: 'Design token frameworks aligned with player and investor incentives.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Simulation & Feedback Loops',
    desc: 'Run scenario-based simulations to test sustainability and engagement.',
    color: 'purple',
  },
  {
    icon: Code,
    title: 'Deployment & Support',
    desc: 'Support live game token launches, audit emissions, and post-launch updates.',
    color: 'blue',
  },
]; 
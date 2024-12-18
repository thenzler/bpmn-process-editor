// Content of the ProcessEditor.js file
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SHAPES = {
  RECTANGLE: { width: 160, height: 60, text: 'Process' },
  CIRCLE: { radius: 40, text: 'Start/End' },
  DIAMOND: { width: 100, height: 100, text: 'Decision' }
};

// Rest of the component code...
[Rest of the code from the previous artifact]
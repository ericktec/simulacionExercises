import numpy as np
try:
    import winsound
except ImportError:
    import os
    def playsound(frequency,duration):
        #apt-get install beep
        os.system('beep -f %s -l %s' % (frequency,duration))
else:
    def playsound(frequency,duration):
        winsound.Beep(frequency,duration)

elements = [23, 80, 10, 23]
probabilities = [0.2, 0.5, 0.2, 0.1]

playsound(125, 3)

for i in range (0, 100):
  print(np.random.choice(elements, 1, p=probabilities))
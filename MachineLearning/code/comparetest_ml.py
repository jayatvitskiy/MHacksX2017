import sys
import traceback
import os

import cv2
from sklearn.externals import joblib

from common.config import get_config
from common.image_transformation import apply_image_transformation
filepath = "../../target_char.txt"
if(os.stat(filepath).st_size == 0):
    char = "A"

else:
    file = open(filepath)
    char = file.readline()[0]


model_name="logistic"
user_sign_dir = "../data/images/test"
for filename in os.listdir(user_sign_dir):
    if filename.endswith(".jpg"):
        frame = cv2.imread(filename)
        try:
            frame = apply_image_transformation(frame)
            frame_flattened = frame.flatten()
            classifier_model = joblib.load(model_serialized_path)
            predicted_labels = classifier_model.predict(frame_flattened)
            predicted_label = predicted_labels[0]
            print("Predicted label = {}".format(predicted_labels))

            if image_label != predicted_label:
                print("Incorrect prediction!!")
                cv2.waitKey(5000)
        except Exception:
            exception_traceback = traceback.format_exc()
            print("Error while applying image transformation on image path '{}' with the following exception trace:\n{}".format(
                filename, exception_traceback))
            continue
cv2.destroyAllWindows()
print "The program completed successfully !!"


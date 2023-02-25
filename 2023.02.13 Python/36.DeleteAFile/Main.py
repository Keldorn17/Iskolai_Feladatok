import os
import shutil

path = "folder"

try:
    # os.remove(path) # delete a file
    # os.rmdir(path)  # delete an empty directory
    shutil.rmtree(path)  # delete a directory containing files
except FileNotFoundError:  # it is a file error
    print("That file was not found")
except PermissionError:  # it is a directory error
    print("You do not have permission to delete that")
except OSError:  # folder is not empty error
    print("You cannot delete that using that function")
else:
    print(path + " was deleted")

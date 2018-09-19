static class TestDataEmptyArray {
    public static int[] get_array() {
        // complete this function
        return new int[]{};
    }
}

static class TestDataUniqueValues {
    public static int[] get_array() {
        // complete this function
        return new int[]{2,5,6,1,9,10,8};
    }

    public static int get_expected_result() {
        // complete this function
        return 3;
    }
}

static class TestDataExactlyTwoDifferentMinimums {
    public static int[] get_array() {
        // complete this function
        return new int[]{9,6,7,5,10,8,11,5,23};
    }

    public static int get_expected_result() {
        // complete this function
        return 3;
    }
}